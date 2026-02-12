// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Molina",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "A Very Important Question",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me ?",                                    // First interaction
            yesBtn: "Absolutely",                                             // Text for "Yes" button
            noBtn: "Ew, no",                                               // Text for "No" button
            secretAnswer: "Trick question ! Click here hehe"           // Secret hover message
        },
        second: {
            text: "Exactly how much do you like me ?",                          // For the love meter
            startText: "Meh 😒",                                   // Text before the percentage
            nextBtn: "Lock in my answer"                                         // Text for the next button
        },
        third: {
            text: "My sweet Soriya, will you be my valentine on February 14th, 2026 ?", // The big question!
            yesBtn: "I would love to :)",                                             // Text for "Yes" button
            noBtn: "No you disgust me"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "You LOVE me ??? Aww me too pookie 💞",  // Shows when they go past 5000%
        high: "Wow you must like me a lot :o",              // Shows when they go past 1000%
        normal: "Are you starting to like me ?"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Thank you for having me my love <3 I'm so lucky to be with such a beautiful and generous lady !",
        message: "Go look in the closet for a sec :)",
        emojis: "❤️💜❤️💜❤️💜❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dyoxyaqcm/video/upload/v1770934995/Seven_Lions_SLANDER_Dabin_-_First_Time_feat._Dylan_Matthew___Ophelia_Records_mp3cut.net_mrlr5i.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
