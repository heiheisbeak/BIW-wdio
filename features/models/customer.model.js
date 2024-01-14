
import { faker } from '@faker-js/faker';


class CustomerModel {
    constructor(
        Gender = faker.person.gender(),
        FirstName = faker.person.firstName(),
        LastName = faker.person.lastName(),
        Email = faker.internet.email(),
        CompanyName = faker.company.name(),
        Newsletter = faker.datatype.boolean(),
        Country = faker.location.country(),
        State = faker.location.state(),
        City = faker.location.city(),
        AddressLine1 = faker.location.street(),
        PostCode = faker.location.zipCode(),
        Phone = faker.phone.number()
    )
    {
        this.Gender = Gender;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.CompanyName = CompanyName;
        this.Newsletter = Newsletter;
        this.Country = Country;
        this.State = State;
        this.City = City;
        this.AddressLine1 = AddressLine1;
        this.PostCode = PostCode;
        this.Phone = Phone;
    }
}
export default CustomerModel;
