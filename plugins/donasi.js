let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ GOPAY •  [0877-9323-6775]
│ PULSA •  [0821-4756-2437]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
