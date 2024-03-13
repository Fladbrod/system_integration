from dotenv import load_dotenv, dotenv_values

# Example 1
environment_variables = dotenv_values()
print(environment_variables['MYSQL_PASSWORD'])

#Example 2
import os

load_dotenv()
print(os.get('MYSQL_PASSWORD'))