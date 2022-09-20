import { Injectable } from "@nestjs/common";
import { PrismaService } from "database/prisma.service";
import { AttendanceDTO } from "./attendance.dto";


@Injectable()
export class AttendanceService {

    constructor(private prisma: PrismaService) {}

    async create(data: AttendanceDTO): Promise<AttendanceDTO> {
        const attendance = await this.prisma.attendance.create({
            data 
        });
        return attendance;
    }

    async update(id: number, data: AttendanceDTO): Promise<AttendanceDTO> {
        return await this.prisma.attendance.update({
            data,
            where: {
                id,
            }
        })
    }

}