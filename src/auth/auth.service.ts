import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginInput, SignupInput } from './dto/input';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { EmailService } from 'src/email/email.service'; // Importa el servicio de email

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService, // Inyecta el servicio de email
  ) {}

  private getJwtToken(userId: string) {
    return this.jwtService.sign({ id: userId });
  }

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signupInput);
    const token = this.getJwtToken(user.id);

    // Enviar un correo electrónico de confirmación
    await this.emailService.sendEmail(
      user.email,
      'Bienvenido a nuestra aplicación',
      `Hola ${user.firstName}, ¡gracias por registrarte!`,
      `<h1>Hola ${user.firstName},</h1><p>¡Gracias por registrarte en nuestra aplicación!</p>`,
    );

    return {
      token,
      user,
    };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { email, password } = loginInput;

    const user = await this.usersService.findOneByEmail(email);

    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException('Email or Password do not match');
    }

    const token = this.getJwtToken(user.id);

    // Enviar un correo electrónico de notificación de inicio de sesión
    await this.emailService.sendEmail(
      user.email,
      'Inicio de sesión exitoso',
      `Hola ${user.firstName}, has iniciado sesión correctamente.`,
      `<h1>Hola ${user.firstName},</h1><p>Has iniciado sesión correctamente en nuestra aplicación.</p>`,
    );

    return {
      token,
      user,
    };
  }

  async validateUser(id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (user.isActive === false)
      throw new UnauthorizedException(`User is inactive, talk with an admin`);

    delete user.password;

    return user;
  }

  revalidateToken(user: User): AuthResponse {
    const token = this.getJwtToken(user.id);
    return {
      token,
      user,
    };
  }
}









// import {
//   BadRequestException,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { LoginInput, SignupInput } from './dto/input';
// import { AuthResponse } from './types/auth-response.type';
// import { UsersService } from 'src/users/users.service';
// import * as bcrypt from 'bcrypt';
// import { JwtService } from '@nestjs/jwt';
// import { User } from 'src/users/entities/user.entity';
// import { EmailService } from '../email/email.service';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly usersService: UsersService,
//     private readonly jwtService: JwtService,
//     private readonly emailService: EmailService,
//   ) {}

//   private getJwtToken(userId: string) {
//     return this.jwtService.sign({ id: userId });
//   }

//   async signup(signupInput: SignupInput): Promise<AuthResponse> {
//     const user = await this.usersService.create(signupInput);
//     const token = this.getJwtToken(user.id);   
  
  
//     try {
//       const emailContent = `Hola ${user.firstName}, gracias por registrarte en nuestra plataforma.`;
//       console.log('Email content:', emailContent); // Log the email content for inspection
//       await this.emailService.sendMail(
//         user.email,
//         'Bienvenido a NexoTV',
//         emailContent,
//       );
//       console.log(`Email sent to ${user.email} for signup.`);
//     } catch (error: any) {
//       console.error(`Error sending signup email: ${error.message}`);
//       throw new Error('Error sending email');
//     }
  
//     return {
//       token,
//       user,
//     };
//   }

//   async login(loginInput: LoginInput): Promise<AuthResponse> {
//     const { email, password } = loginInput;

//     const user = await this.usersService.findOneByEmail(email);

//     if (!bcrypt.compareSync(password, user.password)) {
//       throw new BadRequestException('Email or Password do not match');
//     }

//     const token = this.getJwtToken(user.id);
//     // Enviar correo de login
//     await this.emailService.sendMail(
//       user.email,
//       'Bienvenido a NexoTV',
//       `Hola ${user.firstName}, iniciaste sesion exitosamente.`,
//     );

//     return {
//       token,
//       user,
//     };
//   }

//   async validateUser(id: string): Promise<User> {
//     const user = await this.usersService.findOneById(id);
//     if (user.isActive === false)
//       throw new UnauthorizedException(`User is inactive, talk with an admin`);

//     delete user.password;

//     return user;
//   }

//   revalidateToken(user: User): AuthResponse {
//     const token = this.getJwtToken(user.id);
//     return {
//       token,
//       user,
//     };
//   }
// }


