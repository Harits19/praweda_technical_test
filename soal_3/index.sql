-- "User" definition
CREATE TABLE "User" (Id TEXT, Nama TEXT, Email TEXT, telp TEXT);

INSERT INTO
  "User" (Id, Nama, Email, telp)
VALUES
  ('12qwer', 'Imron', NULL, '081234567890'),
  (
    '321rewq',
    'Juli',
    'Sammy@mail.com',
    '0987654321'
  ),
  (NULL, 'Gajah Mada', NULL, NULL);

CREATE TABLE Company (
  Id TEXT,
  User_id TEXT,
  Company_code TEXT,
  Company_name TEXT
);

INSERT INTO
  Company (Id, User_id, Company_code, Company_name)
VALUES
  ('trew098', '12qwer', 'SPI', NULL),
  (NULL, NULL, NULL, 'Samudera'),
  ('poiuyt1234', '321rewq', 'PIC', 'Samudera');

SELECT
  u.Id as "User_id",
  c.Id as "Company_id",
  u.Nama as "Nama",
  u.Email as "Email",
  u.telp as "Telp",
  c.Company_code as "Company_code",
  c.Company_name as "Company_name"
FROM
  "User" u
  INNER JOIN Company c ON c.User_id = u.Id
WHERE
  u.Id NOTNULL