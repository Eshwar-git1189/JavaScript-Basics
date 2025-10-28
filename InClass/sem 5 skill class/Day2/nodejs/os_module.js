const os = require('os');

console.log(os.cpus().length); // Number of CPU cores
console.log(os.totalmem() / (1024 * 1024 * 1024)); // Total memory in GB
console.log(os.freemem() / (1024 * 1024 * 1024)); // Free memory in GB
console.log(os.uptime() / 3600); // Uptime in hours
console.log(os.platform()); // Operating system platform
console.log(os.homedir()); // Home directory path
