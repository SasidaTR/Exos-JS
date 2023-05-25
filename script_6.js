function translateARN(arn) {
  const codons = {
    UCU: 'Sérine',
    UCC: 'Sérine',
    UCA: 'Sérine',
    UCG: 'Sérine',
    AGU: 'Sérine',
    AGC: 'Sérine',
    CCU: 'Proline',
    CCC: 'Proline',
    CCA: 'Proline',
    CCG: 'Proline',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UUU: 'Phénylalanine',
    UUC: 'Phénylalanine',
    CGU: 'Arginine',
    CGC: 'Arginine',
    CGA: 'Arginine',
    CGG: 'Arginine',
    AGA: 'Arginine',
    AGG: 'Arginine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine'
  };

  let proteinSequence = '';

  for (let i = 0; i < arn.length; i += 3) {
    const codon = arn.substr(i, 3);
    const aminoAcid = codons[codon];
    proteinSequence += aminoAcid + '-';
  }

  return proteinSequence.slice(0, -1); // Remove the trailing dash
}

const arn1 = 'CCGUCGUUGCGCUACAGC';
const arn2 = 'CCUCGCCGGUACUUCUCG';

console.log(`ARN 1: ${arn1}`);
console.log(`Protéines 1: ${translateARN(arn1)}`);
console.log('\n');
console.log(`ARN 2: ${arn2}`);
console.log(`Protéines 2: ${translateARN(arn2)}`);
