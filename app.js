class JogoDoNumeroSecreto {
  constructor() {
    this.numeroMaximo = 100;
    this.numeroSecreto = Math.floor(Math.random() * this.numeroMaximo) + 1;
    this.numeroTentativas = 0;

    this.botaoChutar = document.getElementById("chutar");
    this.inputChutar = document.querySelector("input");
    this.botaoReiniciar = document.getElementById("reiniciar");
    this.botaoDecremento = document.getElementById("decremento");
    this.botaoIncremento = document.getElementById("incremento");

    // Detecta se as setas do teclado foram pressionada, depois executa alterarValor() de acordo com a seta pressionada
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.alterarValor(-1);
      } else if (event.key === "ArrowRight") {
        this.alterarValor(1);
      }
    });

    // Detecta se enter foi pressionado e executa chutar()
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !this.botaoChutar.disabled) {
        this.chutar();
      }
    });

    this.iniciarJogo();
  }

  adicionarErroAoInput() {
    this.inputChutar.classList.add("erro");
    setTimeout(() => {
      this.inputChutar.classList.remove("erro");
    }, 500); // 500ms = 0,5 segundos
  }

  mudarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  }

  iniciarJogo() {
    this.botaoReiniciar.disabled = true;
    this.mudarTextoNaTela("h1", "Jogo dos números secretos");
    this.mudarTextoNaTela(
      "p",
      `Escolha um número entre 1 e ${this.numeroMaximo}`
    );
    this.botaoChutar.addEventListener("click", this.chutar.bind(this));
    this.botaoReiniciar.addEventListener("click", this.reiniciar.bind(this));

    if (this.botaoDecremento && this.botaoIncremento) {
      this.botaoDecremento.addEventListener("click", () =>
        this.alterarValor(-1)
      );
      this.botaoIncremento.addEventListener("click", () =>
        this.alterarValor(1)
      );
    } else {
      console.error("Erro: elementos decremento e incremento não encontrados");
    }
  }

  chutar() {
    const chute = parseInt(this.inputChutar.value, 10);
    if (!chute || chute < 1 || chute > this.numeroMaximo) {
      this.mudarTextoNaTela(
        "p",
        `Por favor, digite um número válido entre 1 e ${this.numeroMaximo}`
      );
      this.adicionarErroAoInput();
      return;
    }

    this.numeroTentativas++;

    if (chute === this.numeroSecreto) {
      this.mudarTextoNaTela("h1", "Acertou!");
      this.mudarTextoNaTela(
        "p",
        `
        Parabéns, você acertou o número secreto
        <span style="text-decoration: underline; color: #ec84ed; font-weight: bold;">${this.numeroSecreto}</span>
        com
        <span style="text-decoration: underline; color: #ec84ed; font-weight: bold;">${this.numeroTentativas}</span>
        tentativas!
        `
      );
      this.botaoReiniciar.disabled = false;
      this.botaoChutar.disabled = true;
    } else if (chute > this.numeroSecreto) {
      this.mudarTextoNaTela(
        "p",
        `O número secreto é <span style="text-decoration: underline; color: #ded9a7; font-weight: bold;">menor</span> que o número que você escolheu.`
      );
      this.adicionarErroAoInput();
    } else {
      this.mudarTextoNaTela(
        "p",
        `O número secreto é <span style="text-decoration: underline; color: #e87918; font-weight: bold;">maior</span> que o número que você escolheu.`
      );
      this.adicionarErroAoInput();
    }
  }

  reiniciar() {
    this.mudarTextoNaTela("h1", "Jogo dos números secretos");
    this.mudarTextoNaTela(
      "p",
      `Escolha um número entre 1 e ${this.numeroMaximo}`
    );
    this.numeroSecreto = Math.floor(Math.random() * this.numeroMaximo) + 1;
    this.numeroTentativas = 0;
    this.inputChutar.value = "";
    this.botaoReiniciar.disabled = true;
    this.botaoChutar.disabled = false;
    this.mudarTextoNaTela(
      "p",
      `Escolha um número entre 1 e ${this.numeroMaximo}`
    );
    this.inputChutar.classList.add("erro");
    setTimeout(() => {
      this.inputChutar.classList.remove("erro");
    }, 500); // 500 ms = 0,5 segundos
  }

  alterarValor(incremento) {
    let valorAtual = parseInt(this.inputChutar.value, 10);
    if (!valorAtual || valorAtual === 0) {
      this.inputChutar.value = incremento === -1 ? this.numeroMaximo : 1;
    } else {
      let novoValor = valorAtual + incremento;
      if (novoValor < 1) {
        this.inputChutar.value = 1;
      } else if (novoValor > this.numeroMaximo) {
        this.inputChutar.value = this.numeroMaximo;
      } else {
        this.inputChutar.value = valorAtual + incremento;
      }
    }
  }
}

new JogoDoNumeroSecreto();
