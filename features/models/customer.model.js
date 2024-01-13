//const { faker } = require('@faker-js/faker');
import { faker } from '@faker-js/faker';


class CustomerModel {
    constructor(
        Gender = faker.person.gender(),
        FirstName = faker.person.firstName(),
        LastName = faker.person.lastName(),
        Email = faker.internet.email(),
        CompanyName = faker.company.name(),
        Newsletter = faker.datatype.boolean(),

    )
    {
        this.Gender = Gender;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.CompanyName = CompanyName;
        this.Newsletter = Newsletter;
    }
}
export default new CustomerModel();
