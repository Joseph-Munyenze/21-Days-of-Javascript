function greetByNationality(nationality) {
    switch (nationality.toLowerCase()) {
      case 'american':
        console.log('Hello, American friend!');
        break;
      case 'tanzania':
        console.log('Habari yako!');
        break;
      case 'germany':
        console.log('Hallo,Guten Abend');
        break;
      case 'zimbabwe':
        console.log('Urare Mushe');
        break;
      case 'congo':
        console.log('Bonjour');
        break;
      default:
        console.log('Hello there! Nice to meet you.');
    }
  }
  greetByNationality('Tanzania');  
  greetByNationality('germany'); 
 

  