import { Test, TestingModule } from '@nestjs/testing';
import { CredentialController } from './credential.controller';
import { CredentialService } from './credential.service';

describe('CredentialController', () => {
  let credentialController: CredentialController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CredentialController],
      providers: [CredentialService],
    }).compile();

    credentialController = app.get<CredentialController>(CredentialController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(credentialController.getHello()).toBe('Hello World!');
    });
  });
});
