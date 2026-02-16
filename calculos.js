export function calcularIrrigacao(dados) {
  return {
    cultura: dados.cultura,
    area: dados.areaTotal + ' ha',
    vazaoBomba: '100 L/h (exemplo)',
    emissores: '50 (exemplo)',
    frequenciaIrrigacao: '2x/dia (exemplo)'
  };
}