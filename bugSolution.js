```javascript
// Ensure Tailwind directives are correctly included in your main CSS file (e.g., `index.css`)
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// Verify your tailwind.config.js (or tailwind.config.cjs) is correctly configured and points to the correct files
// module.exports = {
//   content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// The component would look like this, ensuring that classes are correctly written
<div className="bg-red-500 p-4">
  <p>This text should now be red and have padding.</p>
</div>
```