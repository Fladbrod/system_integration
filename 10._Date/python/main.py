from datetime import datetime

# Format: YYYY-MM-DD HH:MM:SS.ffffff
current_datetime = datetime.now()

print(current_datetime)

# Format: YYYY-MM-DD HH:MM:SS
print(datetime.now().strftime('%Y-%m-%d %H:%M:%S'))