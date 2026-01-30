# Angular Signals - Learning Repository

A hands-on learning repository for mastering Angular Signals, the modern reactive primitive introduced in Angular 16+. This repository is designed to help you understand and practice signal-based state management through practical examples.

## 📚 What You'll Learn

- **Signals Fundamentals**: How to create and use reactive signals in Angular
- **Computed Signals**: Creating derived state that automatically updates
- **Signal Updates**: Different ways to update signal values (set, update, mutate)
- **Reactive Programming**: Building reactive UIs without RxJS observables
- **State Management**: Managing application state with signals
- **Performance Benefits**: Understanding how signals improve change detection

## 💡 Project Features

This learning project implements a practical user status management system that demonstrates:

- **Signal-based State Management**: Using `signal()` for reactive state
- **Computed Signals**: Implementing `computed()` for derived state
- **User Status Tracking**: Interactive status system (online, away, offline)
- **Working Hours Detection**: Business hours calculation with computed signals
- **Conditional Logic**: Dynamic behavior based on signal values
- **Standalone Components**: Modern Angular architecture

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI 18.0+

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd angular-signals
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🧪 Running Tests

Execute unit tests via Karma:
```bash
npm test
```

## 📦 Building the Project

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎯 Key Concepts & Code Examples

### 1. Creating a Signal
Signals are reactive containers that store values and notify consumers when changes occur.

```typescript
// Create a signal with an initial value and type
userStatus = signal<'online' | 'away' | 'offline'>('offline');
```

**Key Points:**
- Signals hold values that can change over time
- TypeScript types ensure type safety
- Template automatically updates when signal changes

### 2. Reading Signal Values
Access signal values by calling them as functions:

```typescript
// In the component
const currentStatus = this.userStatus();  // Returns: 'offline', 'online', or 'away'

// In the template
{{ userStatus() }}
```

### 3. Updating Signals
Use `.set()` to replace the signal's value:

```typescript
goOnline() {
  this.userStatus.set('online');
}🎓 Learning Path

### Getting Started
1. Clone and run the project
2. Explore [app.component.ts](src/app/app.component.ts) - see all signal implementations
3. Check [app.component.html](src/app/app.component.html) - see how signals are used in templates
4. Experiment by modifying signal values and computed logic

### Exercises to Try
- [ ] Add a new signal for tracking user mood
- [ ] Create a computed signal that combines status and mood
- [ ] Implement a counter signal with increment/decrement methods
- [ ] Add a signal for tracking the last status change timestamp
- [ ] Create a computed signal for determining if the user has been away too long

### Next Steps
- Explore `effect()` for side effects based on signal changes
- Learn about signal equality functions
- Understand when to use signals vs RxJS observables
- Practice migrating RxJS code to signals

## 📚 Additional Learning Resources

- [Angular Signals Documentation](https://angular.io/guide/signals) - Official guide
- [Angular Signals Deep Dive](https://blog.angular.io/angular-signals-explained) - Blog post
- [Signals vs Observables](https://angular.io/guide/signals#comparison-with-rxjs) - When to use what
- [Angular Official Documentation](https://angular.io/) - Complete Angular docs

## 🤝 Contributing & Feedback

This is a learning repository! Feel free to:
- Fork and experiment with your own implementations
- Add more examples and use cases
- Share your learning journey
- Suggest improvements or additional examples

```typescript
// Simple computed signal
notificationsEnabled = computed(() => this.userStatus() === 'online');

// Complex computed with status messages
statusMessage = computed(() => {
  const status = this.userStatus();
  switch(status) {
    case 'online':
      return 'Available for meetings and messages';
    case 'away':
      return 'Temporarily away, will respond soon';
    case 'offline':
      return 'Not available, check back later';
  }
});
```

**Key Points:**
- Computed signals are read-only
- They automatically recalculate when dependencies change
- Perfect for derived state and transformations

### 5. Advanced Computed Logic
Combining multiple conditions and computations:

```typescript
isWithinWorkingHours = computed(() => {
  const now = new Date();
  const hour = now.getHours();
  const isWeekday = now.getDay() > 0 && now.getDay() < 6;
  
  // Depends on both time and userStatus signal
  return isWeekday && hour >= 9 && hour < 17 && this.userStatus() !== 'offline';
});
```

**Key Points:**
- Computed signals can depend on multiple signals
- Can include complex logic and calculations
- Only recalculates when dependencies change (performance optimized)

## 🛠️ Technologies Used

- **Angular 18**: Modern web application framework
- **TypeScript 5.4**: Typed superset of JavaScript
- **RxJS 7.8**: Reactive programming library
- **Jasmine & Karma**: Testing framework and test runner
- **SCSS**: CSS preprocessor for styling

## 📚 Learning Resources

- [Angular Signals Documentation](https://angular.io/guide/signals)
- [Angular Official Documentation](https://angular.io/)
- [Reactive Programming in Angular](https://angular.io/guide/rx-library)

## 🤝 Contributing

This is a learning project, but feel free to fork and experiment with your own signal implementations!

## 📄 License

This project is open source and available for educational purposes.
