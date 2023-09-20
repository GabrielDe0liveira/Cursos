<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <?php 
            $nome = "Gabriel";
            $sobrenome = "de Oliveira";
            echo "$nome $sobrenome \u{1F596}";
            echo '$nome $sobrenome \u{1F596}';
        ?>

        <?php 
            const ESTADO = "SC";
            echo "Moro em " .ESTADO;
        ?>
</body>
</html>