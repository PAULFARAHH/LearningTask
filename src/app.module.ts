import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DepartmentsModule } from './departments/departments.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Guards/roles.guard';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, DepartmentsModule, DoctorModule, PatientModule, AppointmentModule, AuthModule, UsersModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule { }