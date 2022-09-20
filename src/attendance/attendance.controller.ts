import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { AttendanceDTO } from "./attendance.dto";
import { AttendanceService } from "./attendance.service";

@Controller('attendance')
export class AttendanceController {
    constructor(private readonly AttendanceService: AttendanceService) {}

    @Post()
    async createAttendance(@Body() attendance: AttendanceDTO) {
        return this.AttendanceService.create(attendance);
    }

    @Put()
    async updateAttendance(@Body() data: AttendanceDTO) {
        return this.AttendanceService.update(data.id, data);
    }
}