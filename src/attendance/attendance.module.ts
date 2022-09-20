import { Module } from "@nestjs/common";
import { PrismaService } from "database/prisma.service";
import { AttendanceController } from "./attendance.controller";
import { AttendanceGateway } from "./attendance.gateway";
import { AttendanceService } from "./attendance.service";

@Module({
    controllers:[AttendanceController],
    providers:[AttendanceService, PrismaService, AttendanceGateway]
})
export class AttendanceModule {}