<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos primitivos</title>
</head>
<body>
    <h1>Tipos primitivos do PHP</h1>
    <?php 
       // $num = 0x6A;
       // echo "o valor da variável é de $num";

       //$v = 300;
       //var_dump($v);
       //var_dump() e muito importante para executar testes e entender o tipo primitivo das variaveis com que se trabalha

       //$num = 3e5; //3x10^5
       //echo "o valor da variável é de $num";

       //$num = (real)3e5;
       //echo "o valor da variável é de $num";

       //$casado = true;
       //var_dump($casado);
       //echo "O valor para casado e $casado";

       //$vet = [6,8,4,1,9];
       //echo "o vetor e $vet";
       //var_dump($vet);
       
       class pessoa {
            private string $nome;
       }
       
       $p = new pessoa;
       var_dump($p);

    ?>
</body>
</html>