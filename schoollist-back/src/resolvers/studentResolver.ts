import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { TypeOrmDatabase } from "../database";
import { Student } from "../entities/student";
import { DeleteResult } from "typeorm";
import { listStudentsUseCase } from "../useCases/listStudentsUseCase";
import { createStudentUseCase } from "../useCases/createStudentUseCase";
import { deleteStudentUseCase } from "../useCases/deleteStudentUseCase";

@Resolver((of) => Student)
export class StudentResolver {
  studentsRepository = TypeOrmDatabase.getRepository(Student);

  @Query((returns) => [Student], { nullable: true })
  async students(
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("email", { nullable: true }) email: string
  ) {
    return listStudentsUseCase({ cpf, name, email });
  }

  @Mutation((returns) => Student)
  async createStudent(
    @Arg("cpf") cpf: string,
    @Arg("name") name: string,
    @Arg("email") email: string
  ): Promise<Student> {
    return createStudentUseCase({ cpf, name, email });
  }

  @Mutation((returns) => Boolean)
  async deleteStudent(@Arg("cpf") cpf: string) {
    return deleteStudentUseCase({ cpf });
  }
}
