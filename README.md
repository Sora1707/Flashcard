# Vocabulary Flashcard Reviewer

A web-based flashcard application designed for vocabulary review and learning. Store your vocabulary data in YAML format and review it through an interactive HTML interface with multiple filtering and review options.

## Features

- **YAML-based Data Storage**: Simple and human-readable format for storing flashcard data
- **Date-based Review**: Filter flashcards by specific dates or review multiple days at once
- **Multiple Review Modes**: 
  - Single date selection
  - Quick review buttons (3 days, 1 week, 2 weeks, 1 month, 2 months)
- **Shuffle Support**: Randomize card order for varied learning experience
- **Word Limit Control**: Set custom limits on the number of words to review (between 10-30)
- **Card Navigation**: Use arrow buttons or keyboard navigation to move between cards
- **Card Details**: Each card displays content, pronunciation, and meaning

## Project Structure

```
flashcard/
├── index.html              # Main HTML interface
├── README.md              # This file
├── util.py               # Python utility (for data management)
├── data/                 # YAML flashcard data files
│   ├── 2024-12-31.yaml
│   ├── 2025-01-01.yaml
│   └── ... (organized by date)
├── script/               # JavaScript functionality
│   ├── main.js          # Core application logic
│   ├── card.js          # Card display and management
│   ├── data.js          # Data loading and processing
│   ├── navbar.js        # Navigation controls
│   └── util.js          # Utility functions
├── styles/              # CSS styling
│   ├── common.css       # Common styles
│   ├── card.css         # Card component styles
│   └── navbar.css       # Navigation bar styles
└── font/                # Font files
```

## Data Format

Flashcard data is stored in YAML format with the following structure:

```yaml
- content: "vocabulary or phrase here"
  meaning: "definition or translation"
  pronunciation: "how to pronounce it (optional)"
  
- content: "another example"
  meaning: "another definition"
  pronunciation: ""
```

Each YAML file is named by date (e.g., `2025-01-15.yaml`) and contains a list of flashcard entries.

### Example Entry

```yaml
- content: 形骸化
  meaning: "When a system or organization loses its original purpose over time, becoming name-only"
  pronunciation: けいがいか
```

## How to Use

### 1. Open in Browser
Simply open `index.html` in your web browser. The application will automatically load all available flashcard data.

### 2. Select Flashcards
Choose which flashcards to review using one of these methods:
- **Date Input**: Click the date input field to select a specific date
- **Quick Review Buttons**: Click any of the time period buttons (3 days, 1 week, 2 weeks, etc.)

### 3. Set Word Limit (Optional)
Enter a number in the "Words Limit" field to restrict the number of cards shown (10-30 words max).

### 4. Navigate Cards
- **Arrow Buttons**: Click left/right arrows to move between cards
- **Keyboard**: Use arrow keys for navigation
- **Shuffle**: Click the shuffle button to randomize card order

### 5. Review Mode
Toggle review mode on/off with the "Review" button to enable/disable tracking.

## Adding New Flashcards

1. Create or edit a YAML file in the `data/` folder with the date as the filename
2. Add entries following the YAML format above
3. Reload the page in your browser - changes will be automatically loaded

## Browser Compatibility

- Modern browsers with ES6 support
- Requires JavaScript enabled
- No server or build process required

## Dependencies

- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parsing (CDN included)
- [Font Awesome 6](https://fontawesome.com/) - Icons (CDN included)

## Tips for Better Learning

- Review cards regularly to reinforce memory
- Use the shuffle feature to mix up order
- Start with smaller word limits and gradually increase
- Review related dates together using the time period buttons
