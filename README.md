# Social Post Gallery - Animated GIF Setup Guide

## 🎬 How to Add Animated GIFs

### Step 1: Upload Your GIF Files
1. Place all your animated GIF files in the `public/assets/images/` folder
2. Use descriptive filenames like:
   - `animated-burger-promo.gif`
   - `coffee-brewing-animation.gif`
   - `sizzling-grill-animation.gif`
   - `pizza-making-animation.gif`

### Step 2: Update Post Data
In `src/data/posts.js`, add your GIF posts like this:
```javascript
{
  id: 3,
  title: "Modern Burger Promo",
  description: "Eye-catching design meets mouth-watering flavors",
  caption: "🍔 Modern flavors, timeless taste! Our burgers are not just food, they're an experience. Bold, fresh, and absolutely delicious! #ModernBurger #FoodDesign #Delicious #Fresh",
  image: "/assets/images/animated-burger-promo.gif",
  isAnimated: true // This flag ensures proper handling
}
```

### Step 3: File Requirements
✅ **Required for GIFs to work:**
- File extension must be `.gif`
- Files must be in `public/assets/images/` folder
- Use `isAnimated: true` flag in post data
- Use path starting with `/assets/images/`

❌ **What breaks GIF animation:**
- External URLs that compress images
- Converting GIF to WebP or PNG
- Using as background images
- Enabling lazy loading for GIFs
- Image optimization plugins

### Step 4: Features Included
- **GIF Indicator Badge**: Shows "GIF" label on animated images
- **Eager Loading**: GIFs load immediately without lazy loading
- **Animation Restart**: GIFs restart on hover for better UX
- **Download Support**: Maintains .gif format when downloading
- **Error Handling**: Graceful fallback if GIF fails to load
- **Performance**: Only processes actual GIF files

### Step 5: Testing
1. Add your GIF files to `public/assets/images/`
2. Update the posts data with correct paths
3. Run `npm run dev`
4. Check that GIFs are animating properly
5. Verify the GIF badge appears on animated images

### Troubleshooting
If GIFs aren't animating:
1. Check file path is correct: `/assets/images/your-file.gif`
2. Verify file is actually a GIF (not PNG/JPG renamed)
3. Ensure `isAnimated: true` is set in post data
4. Check browser dev tools for any 404 errors
5. Try a different GIF file to isolate the issue

### File Structure
```
public/
  assets/
    images/
      animated-burger-promo.gif
      coffee-brewing-animation.gif
      sizzling-grill-animation.gif
      pizza-making-animation.gif
      .gitkeep
```