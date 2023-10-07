<?php
try {
    $conn = new PDO("mysql:host=Spa;dbname=example", 'root', '');

    $text = $_POST['text'];

    $query2 = "INSERT INTO messages (message) VALUES (:text)";
    $stmt2 = $conn->prepare($query2);
    $stmt2->execute(['text' => $text]);

    echo "Сообщение успешно добавлено в БД!";
} catch (PDOException $e) {
    echo "Ошибка: " . $e->getMessage();
}
?>
