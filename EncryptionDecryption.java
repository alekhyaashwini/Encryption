import java.util.Scanner;

public class EncryptionDecryption {
    public static String caesarCipher(String text, int shift) {
        StringBuilder result = new StringBuilder();
        for (char character : text.toCharArray()) {
            if (Character.isLetter(character)) {
                char base = Character.isLowerCase(character) ? 'a' : 'A';
                result.append((char) ((character - base + shift + 26) % 26 + base));
            } else {
                result.append(character); // Non-alphabetical characters remain the same
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter text:");
        String text = scanner.nextLine();

        System.out.println("Enter shift key (number):");
        int shift = scanner.nextInt();

        String encrypted = caesarCipher(text, shift);
        System.out.println("Encrypted text: " + encrypted);

        String decrypted = caesarCipher(encrypted, -shift);
        System.out.println("Decrypted text: " + decrypted);
    }
}
