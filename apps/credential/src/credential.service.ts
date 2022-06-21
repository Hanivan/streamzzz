import { Injectable } from '@nestjs/common';

@Injectable()
export class CredentialService {
  getHello(): string {
    return "It's Working!";
  }
}
