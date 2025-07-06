# FSY Duty Schedule
[![Netlify Status](https://api.netlify.com/api/v1/badges/9a3275b1-bd50-4d33-8375-81462a2d96d8/deploy-status)](https://app.netlify.com/projects/fsyduties/deploys)

## 📜 Description

The **FSY Duty Schedule** is a comprehensive tool designed to help organize and manage duty schedules for counselors and staff at For the Strength of Youth (FSY) conferences. This project includes both a web-based calendar application and a robust schedule parsing system that automatically processes text-based schedule files and matches them with structured role assignments.

---

## ✨ Features

### Web Application
* **Interactive Calendar:** Clear and interactive calendar view of all duties and assignments
* **Mobile-Friendly Design:** Access and manage schedules from any device
* **Printable Schedules:** Generate and print weekly or daily duty rosters

### Schedule Processing System
* **Intelligent Text Parsing:** Automatically extracts role assignments from semi-structured text files
* **Role Discovery:** Matches parsed assignments to structured roles using pattern matching
* **CN Grouping:** Automatically groups Company Navigator (CN) assignments while keeping Adult Counselor (AC) assignments individual
* **CSV Export:** Outputs clean mappings in CSV format for easy integration

---

## 🚀 Quick Start

### Web Application
1. Open `index.html` in your web browser
2. Use the interactive calendar to view and manage duty schedules

### Schedule Processing
1. **Prerequisites:** Python 3.x installed
2. **Basic Usage:**
   ```sh
   python3 schedule_processor.py
   ```
3. **Custom Input Files:**
   ```sh
   python3 schedule_processor.py "your_schedule_file.txt" "your_duties_file.csv"
   ```

---

## 📁 Project Structure

```
fsy-duties-schedule/
├── index.html                    # Web calendar application
├── schedule_processor.py         # Complete schedule parsing and role discovery tool
├── Wednesday Copy.txt            # Example schedule text file
├── duties_and_agenda.csv         # Structured role schedule data
├── parsed_assignments.csv        # Output: parsed assignments with CN grouping
├── role_assignments.csv          # Output: final role-to-name mappings
└── README.md                     # This file
```

---

## 🔧 Schedule Processing Workflow

The `schedule_processor.py` script provides a complete workflow:

1. **Parse Schedule Text:** Extracts role assignments from text files
2. **Group CN Assignments:** Automatically groups Company Navigator roles
3. **Match Roles:** Discovers and matches assignments to structured roles
4. **Export Results:** Outputs clean CSV files with role-to-name mappings

### Input Files
- **Schedule Text File:** Semi-structured text file (e.g., "Wednesday Copy.txt")
- **Duties CSV File:** Structured role schedule data (e.g., "duties_and_agenda.csv")

### Output Files
- **parsed_assignments.csv:** Parsed assignments with CN grouping
- **role_assignments.csv:** Final role-to-name mappings

---

## 📊 Output Format

The final output provides:
- **AC Roles:** Individual assignments (one name per AC role)
- **CN Roles:** Group assignments (multiple names per CN group)
- **Match Confidence:** Percentage match for role discovery validation

Example output format:
```csv
Role,Names,Schedule,Match_Percentage
AC Smith,John Smith,9:00 AM-10:00 AM Activity,95.5
CN Group 1,"Jane Doe, Bob Johnson",10:00 AM-11:00 AM Duty,87.2
```

