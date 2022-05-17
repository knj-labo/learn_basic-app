import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterService } from './twitter.service';

@Module({
    imports: [TypeOrmModule.forFeature()],
    controllers: [],
    providers: [TwitterService],
    exports: [TypeOrmModule],
})
export class TwitterModule {}
