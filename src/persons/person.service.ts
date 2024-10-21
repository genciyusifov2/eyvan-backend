// src/persons/persons.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto, UpdatePersonDto } from './dto/person.dto'
import { Person } from './person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personsRepository: Repository<Person>,
  ) {}

  async getAllPersons() {
    return await this.personsRepository.find();
  }

  async getPersonById(id: number) {
    return await this.personsRepository.findOneBy({ id });
  }

  async createPerson(createPersonDto: CreatePersonDto) {
    const newPerson = this.personsRepository.create(createPersonDto);
    return await this.personsRepository.save(newPerson);
  }

  async updatePerson(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.getPersonById(id);
    if (!person) {
      return null;
    }
    Object.assign(person, updatePersonDto);
    return await this.personsRepository.save(person);
  }

  async deletePerson(id: number) {
    const person = await this.getPersonById(id);
    if (!person) {
      return null;
    }
    return await this.personsRepository.remove(person);
  }
}
