import { Module } from "@nestjs/common";
import { PrismaService } from "database/prisma.service";
import { AttendanceController } from "./attendance.controller";
import { AttendanceService } from "./attendance.service";

@Module({
    controllers:[AttendanceController],
    providers:[AttendanceService, PrismaService]
})
export class AttendanceModule {}