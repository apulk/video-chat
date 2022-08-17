turnConfig = {
  iceServers: [
    {
      urls: ["stun:bn-turn1.xirsys.com"]
    }, {
    username: "ctJq1WQHsklnC3E9JcGgvLL7nJb6LjPiGxNzW_iWHHfORf-NXBgB0HSd_3vQdD-7AAAAAGL8uXRhcHVs",
    credential: "c39955a2-1e11-11ed-8873-0242ac140004",
    urls: [
      "turn:bn-turn1.xirsys.com:80?transport=udp",
      "turn:bn-turn1.xirsys.com:3478?transport=udp",
      "turn:bn-turn1.xirsys.com:80?transport=tcp",
      "turn:bn-turn1.xirsys.com:3478?transport=tcp",
      "turns:bn-turn1.xirsys.com:443?transport=tcp",
      "turns:bn-turn1.xirsys.com:5349?transport=tcp"
    ]
    }
  ]
}
