function info(personname) {
  return {
    personname,

    greeting() {
      const msg = `Hi ${personname}`;
      console.log(msg);
    },
  };
}

const personname = info("Abishek");
const personnam = info("Groot");
personname.greeting();
personnam.greeting();
