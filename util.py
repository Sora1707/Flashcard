import os
import yaml

current_file_path = os.path.abspath(__file__)
current_folder = os.path.dirname(current_file_path)
data_folder = os.path.join(current_folder, "data")
files = os.listdir(data_folder)

item_list = []

for file in files:
    date = file.split(".")[0]
    if date == "all":
        continue
    words = yaml.safe_load(open(os.path.join(data_folder, file), "r", encoding="utf-8"))
    items = [{"date": date, "content": word["content"], "pronunciation": word["pronunciation"], "meaning": word["meaning"]} for word in words]
    item_list.extend(items)
with open(os.path.join(data_folder, "all.yaml"), "w", encoding="utf-8") as file:
    yaml.dump(item_list, file, allow_unicode=True)