var result = {
        title: "",
        type: "",
        authors: "",
        License: "",
        datemod: "      ",
        download_url: "",
        project_url: "",
        description: "",
        main_description: "",
        image: "",
        thumb: "",
        original_url: "",
        short_title: ""
      };
      
      result['title'] = 'hello';

      for (var index in result) {
         if (!result[index] || /^\s*$/.test(result[index])) {
           delete result[index];
         }
      }
      
      console.log(result);