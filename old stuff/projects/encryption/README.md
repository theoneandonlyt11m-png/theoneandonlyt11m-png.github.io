
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 6
My Partner's Key: 7

Our initial shared key: 13

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| UV GVZZL        | Hi Timmy        |13   |
| UCXUH L BC      | Aidan R Hi      |20   |
| J Hbtaa         | U Smell         |15   |
| Easy One        | Easy One        |0    |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: QRQfg4

Using the ASCII table, convert these six characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
01010001 01010010 01010001 01100110 01100111 00110100
### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Tim
    Destination: Aidan 
    Sequence: 1/3
    Data: 01010001 01010010
    =========
    Packet 2:

    Source: Tim
    Destination: Aidan
    Sequence: 2/3 
    Data: 01010001 01100110
    =========
    Packet 3:

    Source: Tim
    Destination: Aidan
    Sequence: 3/3
    Data: 01100111 00110100
    =========

## Part 4: Reflection Questions

- Symmetric has on shared key, while asymmetric has a public and a private key. We used ceaser cypher to exchange messages which is a symmetric encryption and we made a shared asymmetric encryption.
- It's important so other people won't figure out our messages, as the pattern changes every time and only we know it.
- It's important to not share the secret key, because other peple won't figure the pattern that is used to encrypt the messages.
- The messages use TCP, because it's more reliable and slower.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. The packets add header, which has the destination and the source in the internet layer, and in the link layer, it gets sent to other device. Once they arrive, the message gets decrypted.
- The adversary in the middle can see the time the message was sent andperson it was sent to, but they can't find out the content.