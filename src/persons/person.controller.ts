import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PersonsService } from './person.service';
import { CreatePersonDto, UpdatePersonDto } from './dto/person.dto';

@Controller('person')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  getAllPersons() {
    return this.personsService.getAllPersons();
  }

  getPersonById(@Param('id') id: string) {
    return this.personsService.getPersonById(+id); // String'i number'a dönüştür
  }
  

  @Post()
  createPerson(@Body() person: CreatePersonDto) {
    return this.personsService.createPerson(person);
  }

  @Put(':id')
  updatePerson(@Param('id') id: number, @Body() updatedPerson: UpdatePersonDto) {
    return this.personsService.updatePerson(id, updatedPerson);
  }

  @Delete(':id')
  deletePerson(@Param('id') id: number) {
    return this.personsService.deletePerson(id);
  }
}
