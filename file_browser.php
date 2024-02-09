<!DOCTYPE html>
<html>
<head>
    <title>Server File Browser</title>
</head>
<body>
    <h1>Server File Browser</h1>
    <ul>
        <?php
        // Directory to browse
        $directory = '/';

        // Get all files and directories within the specified directory
        $files = scandir($directory);

        // Loop through each file/directory
        foreach ($files as $file) {
            // Ignore . and .. directories
            if ($file != '.' && $file != '..') {
                // Print the file/directory name as a list item
                echo "<li><a href='$file'>$file</a></li>";
            }
        }
        ?>
    </ul>
</body>
</html>
