[![Static Badge](https://img.shields.io/badge/wy%C5%9Bwietl-polsk%C4%85_wersj%C4%99-DC143C?labelColor=FFFFFF)](https://github.com/TenaciousHare/ManualBoarding/blob/main/README-pl.md)

# User Manual for Seat Map Generator Application

## 1. General Outline

Practicing manual check-in is an integral part of handling procedures at every airport. The aim of such exercises is to prepare for emergency situations, such as system failures or power outages, which can lead to flight delays and generate significant losses for airlines. During exercises, handling systems are usually restricted or completely disabled, and all materials are filled out manually. This applies to both boarding passes and Seat Maps, on which the passenger's sequential number (according to the check-in order) and the following markings are entered based on the boarding pass:

- I - for children under 2 years old (infant - sits on the lap of an adult),
- C - for children from 2 to 11 years old (has a separate seat and sequential number).

After completing the boarding process, the completed Seat Maps are collected from two gates and the data is transferred to one of them (without rewriting the sequential numbers - only X is placed to mark the occupied seat). This is followed by a critical moment, namely counting the aircraft sections. This is extremely stressful for employees due to the limited time to close the aircraft and the need to accurately transmit data to the captain for its proper balancing. Time pressure often leads to errors, and the elimination of these errors is the aim of this application.

## 2. Application Purpose

The application aims to practice counting aircraft sections in less stressful conditions, which will allow for the automation of this process during real manual check-ins, regardless of their cause.

## 3. Application Functionality

1. **Selecting an Aircraft:**

   - A blank **Boeing 737-800** Seat Map is displayed by default.
   - Use the dropdown menu below the Seat Map to select a different aircraft.

2. **Generating a Seat Map:**

   - Clicking "Generate Seat Map" randomly fills it with sequential numbers, X's, and passenger type markings. A set number (hex) is generated in the upper right corner of the sheet.

3. **Printing a Seat Map:**

   - Click "Print Seat Map" to print the Seat Map for an employee.

4. **Calculating Aircraft Sections:**

   - Clicking "Show Totals" automatically calculates the section counts. The calculated sheet can be printed for your own records (the sheet number remains the same).

The user can generate another Seat Map or clear all fields by clicking "Clear Seat Map". Blank Seat Maps can be printed for training purposes at the airport.

## 4. Technologies Used

[![Technologies used](https://skillicons.dev/icons?i=react,typescript,css,vite,vitest)](https://skillicons.dev)

**Additional Information:**
The application is available online at: https://manual-boarding.netlify.app/

The user manual is available in [Polish](https://github.com/TenaciousHare/ManualBoarding/blob/main/README-pl.md) and [English](https://github.com/TenaciousHare/ManualBoarding/blob/main/README.md).

**Note:**
This manual is for informational purposes only and may be subject to change.
