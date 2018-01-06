var answer = document.calculate_form.result.value;

               function run1(){
                        document.calculate_form.result.value += "1";
               }
               function run2(){
                        document.calculate_form.result.value += "2";
               }
               function run3(){
                        document.calculate_form.result.value += "3";
               }
               function run4(){
                        document.calculate_form.result.value += "4";
               }
               function run5(){
                        document.calculate_form.result.value += "5";
               }
               function run6(){
                        document.calculate_form.result.value += "6";
               }
               function run7(){
                        document.calculate_form.result.value += "7";
               }
               function run8(){
                        document.calculate_form.result.value += "8";
               }
               function run9(){
                        document.calculate_form.result.value += "9";
               }
               function runplus(){
                        document.calculate_form.result.value += "+";
               }
               function runminus(){
                        document.calculate_form.result.value += "-";
               }
               function runmult(){
                        document.calculate_form.result.value += "*";
               } 
               function rundiv(){
                        document.calculate_form.result.value += "/";
               }
               function runpersent(){
                        document.calculate_form.result.value += "%";
               }
                function run0(){
                        document.calculate_form.result.value += "0";
               }
               function runpoint(){
                        document.calculate_form.result.value += ".";
               }
               function runclear(){
                        document.calculate_form.result.value = "";
               }

               function evalop()
               {
                var evalo=eval(document.calculate_form.result.value);
                document.calculate_form.result.value = evalo;
               }