const { exec } = require('child_process');

// 定义要运行的命令
const services = [
  { name: 'API Gateway', command: 'cd api-gateway && node index.js' },
  { name: 'Service1-auth', command: 'cd auth-service && node index.js' },
  { name: 'Service2-file', command: 'cd file-upload-service && node index.js' },
  { name: 'Service3-filter', command: 'cd filter-service && node index.js' },
  { name: 'Service4-chat', command: 'cd chat-toggle-service && node index.js' },
  { name: 'Service5-emoji', command: 'cd emoji-service && node index.js' },
  { name: 'Service6-notification', command: 'cd notification-service && node index.js' }
];

// 依次运行每个命令
services.forEach((service) => {
  if (!service.command) {
    console.error(`${service.name} 的 command 未定义`);
    return;
  }

  console.log(`启动 ${service.name}，命令: ${service.command}`);
  const process = exec(service.command, (error, stdout, stderr) => {
    if (error) {
      console.error(`${service.name} 启动失败:`, error);
      return;
    }
    console.log(`${service.name} 输出:`, stdout);
    console.error(`${service.name} 错误:`, stderr);
  });

  process.on('close', (code) => {
    if (code === 0) {
      console.log(`${service.name} 启动成功`);
    } else {
      console.log(`${service.name} 启动失败，退出码: ${code}`);
    }
  });
});
