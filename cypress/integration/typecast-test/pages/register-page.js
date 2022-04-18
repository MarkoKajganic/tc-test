export class Register {

	genderFemale(){
		return cy.get('#gender-female')
	}

	genderMale(){
		return cy.get('#gender-male')
	}

	firstName(){
		return cy.get('#FirstName')
	}

	lastName(){
		return cy.get('#LastName')
	}

	dateDay(){
		return cy.get('select[name="DateOfBirthDay"]')
	}

	dateMonth(){
		return cy.get('select[name="DateOfBirthMonth"]')
	}

	dateYear(){
		return cy.get('select[name="DateOfBirthYear"]')
	}

	email(){
		return cy.get('#Email')
	}

	address(){
		return cy.get('#StreetAddress')
	}

	zip(){
		return cy.get('label[for="ZipPostalCode"]').next().next()
	}

	zipHelper(){
		return cy.get('label[for="ZipPostalCode"]')
	}

	city(){
		return cy.get('label[for="City"]').next().next().next()
	}

	country(){
		return cy.get('#CountryId')
	}

	phone(){
		return cy.get('#Phone')
	}

	newsletter(){
		return cy.get('#Newsletter')
	}

	password(){
		return cy.get('#Password')
	}

	passwordConfirmation(){
		return cy.get('#ConfirmPassword')
	}


	//COMPANY ELEMENTS
	registerAsCompany(){
		return cy.get('#RegisterAsCompany')
	}

	companyName(){
		return cy.get('#Company')
	}

	companyOIB(){
		return cy.get('#CompanyOIB')
	}

	companyEmail(){
		return cy.get('#CompanyEmail')
	}

	companyTelephone(){
		return cy.get('#CompanyTelephone')
	}

	companyContactPerson(){
		return cy.get('#CompanyContactPerson')
	}

	companyAddress(){
		return cy.get('#CompanyAddress')
	}

	companyZip(){
		return cy.get('label[for="CompanyZipPostalCode"]').next().next()
	}

	companyCity(){
		return cy.get('label[for="CompanyCity"]').next().next().next()
	}

	companyCountry(){
		return cy.get('#CompanyCountryId')
	}

	submit(){
		return cy.get('#register-button')
	}
}