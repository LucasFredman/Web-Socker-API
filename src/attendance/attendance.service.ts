import { Injectable } from "@nestjs/common";
import { PrismaService } from "database/prisma.service";
import { AttendanceDTO } from "./attendance.dto";
import { AttendanceGateway } from "./attendance.gateway";


@Injectable()
export class AttendanceService {

    constructor(private prisma: PrismaService, private attendanceGateway: AttendanceGateway) {}

    async create(data: AttendanceDTO): Promise<AttendanceDTO> {
        const attendance = await this.prisma.attendance.create({
            data 
        });
        return attendance;
    }

    async update(id: number, data: AttendanceDTO): Promise<AttendanceDTO> {
        const InAttendance = await this.prisma.attendance.update({
            data,
            where: {
                id,
            }
        })

        this.attendanceGateway.wss.emit('attendanceCall', InAttendance);

        return InAttendance
    }

}