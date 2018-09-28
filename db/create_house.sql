INSERT INTO houses(name, address, city, state, zip, image_url, mortgage_amt, monthly_rent)
VALUES($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM houses;