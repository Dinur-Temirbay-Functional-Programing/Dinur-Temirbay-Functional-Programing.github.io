<?php
try {
    $conn = new PDO("mysql:host=Spa;dbname=example", 'root', '');

    if (empty($_POST['email'])) {
        exit("Поле не заполнено!");
    }

    $email = $_POST['email'];
    $query = "INSERT INTO users (email) VALUES (:email)";
    $stmt = $conn->prepare($query);
    $stmt->execute(['email' => $email]);

    header("Location: index.html");
} catch (PDOException $e) {
    echo "Ошибка: " . $e->getMessage();
}
?>
