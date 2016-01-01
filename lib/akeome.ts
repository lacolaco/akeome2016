export default class Akeome {

    constructor(private year:number) {
    }

    private rand(up:number):number {
        return Math.floor(Math.random() * up);
    }

    run() {
        const tokens = ["あ", "け", "お", "め"];
        let buffer = "";
        for (var i = 0; i < this.year; i++) {
            const token = tokens[this.rand(4)];
            buffer += token;

            process.stdout.write(token);
            if (buffer.match(/あけおめ$/g)) {
                console.log("\n\n");
                console.log(`${i + 1}回目であけおめできました！あけおめ！`);
                return;
            }
        }
        console.log("\n\n");
        console.log(`${this.year}回目でもあけおめできませんでした・・・`)
    }
}
