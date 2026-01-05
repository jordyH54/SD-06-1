function Mail(subj, msg) {
    this.subject = subj //aqui se asigna hello
    this.message = msg// aqui se asigna world
  }
  
  // Type your code below this line!
  
  const newMail = new Mail("hello", "world" )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)