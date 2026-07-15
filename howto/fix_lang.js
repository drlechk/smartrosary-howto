const fs = require('fs');

const files = [
    '/Users/lech/Projects/smartrosary-howto/howto/010_onoff.html',
    '/Users/lech/Projects/smartrosary-howto/howto/011_charging.html',
    '/Users/lech/Projects/smartrosary-howto/howto/020_nav.html',
    '/Users/lech/Projects/smartrosary-mockups/howto/010_onoff.html',
    '/Users/lech/Projects/smartrosary-mockups/howto/011_charging.html',
    '/Users/lech/Projects/smartrosary-mockups/howto/020_nav.html'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Change html lang
    content = content.replace(/<html lang="[a-z]+">/, '<html lang="pl">');
    
    // Change select options and order
    const oldOptions = `          <option value="de">DE</option>
          <option value="en">EN</option>
          <option value="pl">PL</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="la">LA</option>
          <option value="pt">PT</option>`;
          
    const newOptions = `          <option value="pl">PL</option>
          <option value="de">DE</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="la" disabled>LA</option>
          <option value="pt">PT</option>`;

    if (content.includes(oldOptions)) {
        content = content.replace(oldOptions, newOptions);
    } else {
        console.log("Could not find exact options block in " + file);
        // fallback in case of different formatting
        content = content.replace('<option value="de">DE</option>', '<!-- replaced -->');
        content = content.replace('<option value="en">EN</option>', '<!-- replaced -->');
        content = content.replace('<option value="pl">PL</option>', '<!-- replaced -->');
        content = content.replace('<option value="es">ES</option>', '<!-- replaced -->');
        content = content.replace('<option value="fr">FR</option>', '<!-- replaced -->');
        content = content.replace('<option value="la">LA</option>', '<!-- replaced -->');
        content = content.replace('<option value="pt">PT</option>', '<!-- replaced -->');
        
        content = content.replace(
            '<select id="howto-language-control" style="width: 85px;">',
            '<select id="howto-language-control" style="width: 85px;">\n' + newOptions
        );
    }
    
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
}
