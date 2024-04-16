import { Controller, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/Guards/roles.guard';

@Controller('patient')
@UseGuards(RolesGuard)
export class PatientController {}
