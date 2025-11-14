import svgPaths from "./svg-x9vxmz8m8l";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame1 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#2c2c2d] text-[28px] text-nowrap whitespace-pre">grey.on.surface.default</p>
      <Text />
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">primary</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <Icon2 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row />
      <Row1 />
    </div>
  );
}

function TokenPill() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.fill.default</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ebebeb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.80}`}</p>
    </div>
  );
}

function SwatchRow() {
  return (
    <div className="bg-[#59595c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame3 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ebebeb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            grey.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill1() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.fill.active</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill1 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ebebeb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.100}`}</p>
    </div>
  );
}

function SwatchRow1() {
  return (
    <div className="bg-[#2c2c2d] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame4 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ebebeb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            grey.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill2() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.fill.disabled</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill2 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ebebeb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.40}`}</p>
    </div>
  );
}

function SwatchRow2() {
  return (
    <div className="bg-[#d0d0d1] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame5 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ebebeb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            grey.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow />
      <SwatchRow1 />
      <SwatchRow2 />
    </div>
  );
}

function TokenPill3() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.surface.default</p>
    </div>
  );
}

function TokenPill4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill3 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.20}`}</p>
    </div>
  );
}

function ColorTestCard() {
  return (
    <div className="bg-[#ebebeb] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text1 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons />
        <Frame />
        <TokenPill4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame2 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Text2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">primary</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <Icon5 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row2 />
      <Row3 />
    </div>
  );
}

function TokenPill5() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.fill.default</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill5 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ebebeb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.80}`}</p>
    </div>
  );
}

function SwatchRow3() {
  return (
    <div className="bg-[#59595c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame6 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ebebeb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            grey.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill6() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.fill.active</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill6 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ebebeb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.100}`}</p>
    </div>
  );
}

function SwatchRow4() {
  return (
    <div className="bg-[#2c2c2d] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame7 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ebebeb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            grey.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill7() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">grey.fill.disabled</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill7 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ebebeb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{grey.40}`}</p>
    </div>
  );
}

function SwatchRow5() {
  return (
    <div className="bg-[#d0d0d1] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame8 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ebebeb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            grey.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow3 />
      <SwatchRow4 />
      <SwatchRow5 />
    </div>
  );
}

function TokenPill8() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill8 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard1() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text3 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons1 />
        <Frame9 />
        <TokenPill9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard />
      <ColorTestCard1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame10 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#242738] text-[28px] text-nowrap whitespace-pre">neutral.on.surface.default</p>
      <Text4 />
    </div>
  );
}

function Button12() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">primary</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <Icon8 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row4 />
      <Row5 />
    </div>
  );
}

function TokenPill10() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.fill.default</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill10 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.70}`}</p>
    </div>
  );
}

function SwatchRow6() {
  return (
    <div className="bg-[#6e738c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame11 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            neutral.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill11() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.fill.active</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill11 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.90}`}</p>
    </div>
  );
}

function SwatchRow7() {
  return (
    <div className="bg-[#414458] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame12 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            neutral.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill12() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.fill.disabled</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill12 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.40}`}</p>
    </div>
  );
}

function SwatchRow8() {
  return (
    <div className="bg-[#b7bbd1] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame13 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            neutral.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow6 />
      <SwatchRow7 />
      <SwatchRow8 />
    </div>
  );
}

function TokenPill13() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.surface.default</p>
    </div>
  );
}

function TokenPill14() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill13 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#242738] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.30}`}</p>
    </div>
  );
}

function ColorTestCard2() {
  return (
    <div className="bg-[#d1d4e6] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text5 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(165, 169, 193, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #A5A9C1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons2 />
        <Frame14 />
        <TokenPill14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a5a9c1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame15 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Text6 />
    </div>
  );
}

function Button18() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">primary</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">secondary</p>
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <Icon11 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">tertiary</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row6 />
      <Row7 />
    </div>
  );
}

function TokenPill15() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.fill.default</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill15 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.70}`}</p>
    </div>
  );
}

function SwatchRow9() {
  return (
    <div className="bg-[#6e738c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame16 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            neutral.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill16() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.fill.active</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill16 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.90}`}</p>
    </div>
  );
}

function SwatchRow10() {
  return (
    <div className="bg-[#414458] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame17 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            neutral.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill17() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">neutral.fill.disabled</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill17 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{neutral.40}`}</p>
    </div>
  );
}

function SwatchRow11() {
  return (
    <div className="bg-[#b7bbd1] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame18 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            neutral.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow9 />
      <SwatchRow10 />
      <SwatchRow11 />
    </div>
  );
}

function TokenPill18() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill19() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill18 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard3() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text7 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons3 />
        <Frame19 />
        <TokenPill19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard2 />
      <ColorTestCard3 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[84px] items-start relative shrink-0" data-name="Row">
      <Container />
      <Container1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame20 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110c79] text-[28px] text-nowrap whitespace-pre">primary.on.surface.default</p>
      <Text8 />
    </div>
  );
}

function Button24() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button27() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline />
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon14 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button29 />
      <Button30 />
      <Button31 />
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row9 />
      <Row10 />
    </div>
  );
}

function TokenPill20() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.default</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill20 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.90}`}</p>
    </div>
  );
}

function SwatchRow12() {
  return (
    <div className="bg-[#0716e0] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame21 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill21() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.active</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill21 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.110}`}</p>
    </div>
  );
}

function SwatchRow13() {
  return (
    <div className="bg-[#110c79] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame22 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill22() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.disabled</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill22 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.30} / mix({grey.60} , 0.5) / srgb`}</p>
    </div>
  );
}

function SwatchRow14() {
  return (
    <div className="bg-[#c0bbca] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame23 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow12 />
      <SwatchRow13 />
      <SwatchRow14 />
    </div>
  );
}

function TokenPill23() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.surface.default</p>
    </div>
  );
}

function TokenPill24() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill23 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.10}`}</p>
    </div>
  );
}

function ColorTestCard4() {
  return (
    <div className="bg-[#f3effc] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text9 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(232, 222, 251, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #E8DEFB)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons4 />
        <Frame24 />
        <TokenPill24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8defb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame25 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0716e0] text-[28px] text-nowrap whitespace-pre">on.surface.primary.head</p>
      <Text10 />
    </div>
  );
}

function Button32() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button33() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button34() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline1() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button35() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline1 />
    </div>
  );
}

function Button36() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon17 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button37 />
      <Button38 />
      <Button39 />
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row11 />
      <Row12 />
    </div>
  );
}

function TokenPill25() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.default</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill25 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.90}`}</p>
    </div>
  );
}

function SwatchRow15() {
  return (
    <div className="bg-[#0716e0] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame26 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill26() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.active</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill26 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.110}`}</p>
    </div>
  );
}

function SwatchRow16() {
  return (
    <div className="bg-[#110c79] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame27 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill27() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.disabled</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill27 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.30} / mix({grey.60} , 0.5) / srgb`}</p>
    </div>
  );
}

function SwatchRow17() {
  return (
    <div className="bg-[#c0bbca] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame28 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow15 />
      <SwatchRow16 />
      <SwatchRow17 />
    </div>
  );
}

function TokenPill28() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill28 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.10}`}</p>
    </div>
  );
}

function ColorTestCard5() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text11 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons5 />
        <Frame29 />
        <TokenPill29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard4 />
      <ColorTestCard5 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame30 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#ed003f] text-[28px] text-nowrap whitespace-pre">secondary.on.surface.default</p>
      <Text12 />
    </div>
  );
}

function Button40() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button41() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8f0023] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button42() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8f0023] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline2() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button43() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8f0023] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline2 />
    </div>
  );
}

function ButtonSecondaryTextRegularMediumDisabled() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative rounded-[16px] shrink-0" data-name="Button/Secondary/Text/Regular / Medium/Disabled">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
      <ButtonSecondaryTextRegularMediumDisabled />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button44() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button45() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button46() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <Icon20 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button44 />
      <Button45 />
      <Button46 />
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row13 />
      <Row14 />
    </div>
  );
}

function TokenPill30() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">secondary.fill.default</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill30 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcebe9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.80}`}</p>
    </div>
  );
}

function SwatchRow18() {
  return (
    <div className="bg-[#ed003f] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame31 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fcebe9] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            secondary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill31() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">secondary.fill.active</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill31 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcebe9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.100}`}</p>
    </div>
  );
}

function SwatchRow19() {
  return (
    <div className="bg-[#8f0023] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame32 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fcebe9] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            secondary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill32() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.disabled</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill32 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcebe9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.50} / mix({grey.fill.disabled} , 0.8) / srgb`}</p>
    </div>
  );
}

function SwatchRow20() {
  return (
    <div className="bg-[#2d4d43] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame33 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fcebe9] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            secondary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow18 />
      <SwatchRow19 />
      <SwatchRow20 />
    </div>
  );
}

function TokenPill33() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">secondary.surface.default</p>
    </div>
  );
}

function TokenPill34() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill33 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ed003f] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.10}`}</p>
    </div>
  );
}

function ColorTestCard6() {
  return (
    <div className="bg-[#fcebe9] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text13 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(252, 199, 196, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #FCC7C4)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons6 />
        <Frame34 />
        <TokenPill34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#fcc7c4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame35 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#ed003f] text-[28px] text-nowrap whitespace-pre">on.surface.secondary.head</p>
      <Text14 />
    </div>
  );
}

function Button47() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button48() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8f0023] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button49() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8f0023] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline3() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button50() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8f0023] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline3 />
    </div>
  );
}

function ButtonSecondaryTextRegularMediumDisabled1() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative rounded-[16px] shrink-0" data-name="Button/Secondary/Text/Regular / Medium/Disabled">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button47 />
      <Button48 />
      <Button49 />
      <Button50 />
      <ButtonSecondaryTextRegularMediumDisabled1 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button51() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button52() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FCEBE9)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FCEBE9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button53() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ed003f] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,8,4,0.3)]" />
      <Icon23 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fcebe9] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button51 />
      <Button52 />
      <Button53 />
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row15 />
      <Row16 />
    </div>
  );
}

function TokenPill35() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">secondary.fill.default</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill35 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcebe9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.80}`}</p>
    </div>
  );
}

function SwatchRow21() {
  return (
    <div className="bg-[#ed003f] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame36 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fcebe9] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            secondary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill36() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">secondary.fill.active</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill36 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcebe9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.100}`}</p>
    </div>
  );
}

function SwatchRow22() {
  return (
    <div className="bg-[#8f0023] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame37 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fcebe9] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            secondary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill37() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.disabled</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill37 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fcebe9] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.50} / mix({grey.fill.disabled} , 0.8) / srgb`}</p>
    </div>
  );
}

function SwatchRow23() {
  return (
    <div className="bg-[#2d4d43] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame38 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fcebe9] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            secondary.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow21 />
      <SwatchRow22 />
      <SwatchRow23 />
    </div>
  );
}

function TokenPill38() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill39() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill38 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.10}`}</p>
    </div>
  );
}

function ColorTestCard7() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text15 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons7 />
        <Frame39 />
        <TokenPill39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard6 />
      <ColorTestCard7 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame40 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Text16 />
    </div>
  );
}

function Button54() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button55() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7bbd1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button56() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7bbd1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline4() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button57() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7bbd1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline4 />
    </div>
  );
}

function ButtonTertiaryTextRegularMediumDisabled() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative rounded-[16px] shrink-0" data-name="Button/Tertiary/Text/Regular / Medium/Disabled">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button54 />
      <Button55 />
      <Button56 />
      <Button57 />
      <ButtonTertiaryTextRegularMediumDisabled />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button58() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <Icon24 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button59() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1C2031)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1C2031)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button60() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dde0f8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(36,39,56,0.3)]" />
      <Icon26 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2031] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button58 />
      <Button59 />
      <Button60 />
    </div>
  );
}

function Buttons8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row17 />
      <Row18 />
    </div>
  );
}

function TokenPill40() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill41() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill40 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{secondary.10}`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text17 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons8 />
        <TokenPill41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame41 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#37078a] text-[28px] text-nowrap whitespace-pre">sbrand-01.on.surface.default</p>
      <Text18 />
    </div>
  );
}

function Button61() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button62() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37078a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button63() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37078a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline5() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button64() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37078a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline5 />
    </div>
  );
}

function Button65() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button61 />
      <Button62 />
      <Button63 />
      <Button64 />
      <Button65 />
    </div>
  );
}

function Button66() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F5EEFB)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F5EEFB)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button67() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F5EEFB)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F5EEFB)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button68() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <Icon28 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button66 />
      <Button67 />
      <Button68 />
    </div>
  );
}

function Buttons9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row19 />
      <Row20 />
    </div>
  );
}

function TokenPill42() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-01.fill.default</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill42 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f5eefb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-01.80}`}</p>
    </div>
  );
}

function SwatchRow24() {
  return (
    <div className="bg-[#792efb] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame42 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f5eefb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-01.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill43() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-01.fill.active</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill43 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f5eefb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-01.100}`}</p>
    </div>
  );
}

function SwatchRow25() {
  return (
    <div className="bg-[#37078a] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame43 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f5eefb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-01.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow24 />
      <SwatchRow25 />
    </div>
  );
}

function TokenPill44() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-01.surface.default</p>
    </div>
  );
}

function TokenPill45() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill44 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.10}`}</p>
    </div>
  );
}

function ColorTestCard8() {
  return (
    <div className="bg-[#f5eefb] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text19 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(180, 128, 253, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #B480FD)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons9 />
        <Frame44 />
        <TokenPill45 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b480fd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame45 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#37640c] text-[28px] text-nowrap whitespace-pre">on.surface.success.head</p>
      <Text20 />
    </div>
  );
}

function Button69() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button70() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37078a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button71() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37078a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline6() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button72() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37078a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline6 />
    </div>
  );
}

function Button73() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row21() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button69 />
      <Button70 />
      <Button71 />
      <Button72 />
      <Button73 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F5EEFB)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F5EEFB)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button74() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <Icon29 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F5EEFB)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F5EEFB)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button75() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F5EEFB)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F5EEFB)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button76() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#792efb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(28,6,67,0.3)]" />
      <Icon31 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5eefb] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button74 />
      <Button75 />
      <Button76 />
    </div>
  );
}

function Buttons10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row21 />
      <Row22 />
    </div>
  );
}

function TokenPill46() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-01.fill.default</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill46 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f5eefb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-01.80}`}</p>
    </div>
  );
}

function SwatchRow26() {
  return (
    <div className="bg-[#792efb] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame46 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f5eefb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-01.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill47() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-01.fill.active</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill47 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f5eefb] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-01.100}`}</p>
    </div>
  );
}

function SwatchRow27() {
  return (
    <div className="bg-[#37078a] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame47 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f5eefb] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-01.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow26 />
      <SwatchRow27 />
    </div>
  );
}

function TokenPill48() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill49() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill48 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard9() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text21 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons10 />
        <Frame48 />
        <TokenPill49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard8 />
      <ColorTestCard9 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame49 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#482105] text-[28px] text-nowrap whitespace-pre">sbrand-02.on.surface.default</p>
      <Text22 />
    </div>
  );
}

function Button77() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button78() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#924005] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button79() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#924005] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline7() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button80() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#924005] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline7 />
    </div>
  );
}

function Button81() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button77 />
      <Button78 />
      <Button79 />
      <Button80 />
      <Button81 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FBEEE7)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FBEEE7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button82() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <Icon32 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FBEEE7)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FBEEE7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button83() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon33 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FBEEE7)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FBEEE7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button84() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <Icon34 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button82 />
      <Button83 />
      <Button84 />
    </div>
  );
}

function Buttons11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row23 />
      <Row24 />
    </div>
  );
}

function TokenPill50() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-02.fill.default</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill50 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fbeee7] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-02.60}`}</p>
    </div>
  );
}

function SwatchRow28() {
  return (
    <div className="bg-[#f46f0e] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame50 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fbeee7] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-02.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill51() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-02.fill.active</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill51 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fbeee7] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-02.80}`}</p>
    </div>
  );
}

function SwatchRow29() {
  return (
    <div className="bg-[#924005] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame51 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fbeee7] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-02.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow28 />
      <SwatchRow29 />
    </div>
  );
}

function TokenPill52() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-02.surface.default</p>
    </div>
  );
}

function TokenPill53() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill52 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.10}`}</p>
    </div>
  );
}

function ColorTestCard10() {
  return (
    <div className="bg-[#fbe7dc] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text23 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(244, 111, 14, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #F46F0E)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons11 />
        <Frame52 />
        <TokenPill53 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame53 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#37640c] text-[28px] text-nowrap whitespace-pre">on.surface.success.head</p>
      <Text24 />
    </div>
  );
}

function Button85() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button86() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#924005] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button87() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#924005] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline8() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button88() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#924005] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline8 />
    </div>
  );
}

function Button89() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button85 />
      <Button86 />
      <Button87 />
      <Button88 />
      <Button89 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FBEEE7)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FBEEE7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button90() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <Icon35 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FBEEE7)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FBEEE7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button91() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon36 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #FBEEE7)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #FBEEE7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button92() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f46f0e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(31,17,5,0.3)]" />
      <Icon37 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbeee7] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button90 />
      <Button91 />
      <Button92 />
    </div>
  );
}

function Buttons12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row25 />
      <Row26 />
    </div>
  );
}

function TokenPill54() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-02.fill.default</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill54 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fbeee7] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-02.60}`}</p>
    </div>
  );
}

function SwatchRow30() {
  return (
    <div className="bg-[#f46f0e] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame54 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fbeee7] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-02.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill55() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">sbrand-02.fill.active</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill55 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#fbeee7] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{sub-brand-02.80}`}</p>
    </div>
  );
}

function SwatchRow31() {
  return (
    <div className="bg-[#924005] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame55 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#fbeee7] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            sbrand-02.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow30 />
      <SwatchRow31 />
    </div>
  );
}

function TokenPill56() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill57() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill56 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard11() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text25 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons12 />
        <Frame56 />
        <TokenPill57 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard10 />
      <ColorTestCard11 />
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex gap-[84px] items-start relative shrink-0" data-name="Row">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame57 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1c3207] text-[28px] text-nowrap whitespace-pre">success.on.surface.default</p>
      <Text26 />
    </div>
  );
}

function Button93() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Default</p>
    </div>
  );
}

function Button94() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37640c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button95() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37640c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline9() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button96() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37640c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline9 />
    </div>
  );
}

function Button97() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button93 />
      <Button94 />
      <Button95 />
      <Button96 />
      <Button97 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button98() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <Icon38 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button99() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
      <Icon39 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button100() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <Icon40 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button98 />
      <Button99 />
      <Button100 />
    </div>
  );
}

function Buttons13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row28 />
      <Row29 />
    </div>
  );
}

function TokenPill58() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">success.fill.default</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill58 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.60}`}</p>
    </div>
  );
}

function SwatchRow32() {
  return (
    <div className="bg-[#61aa1c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame58 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            success.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill59() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">success.fill.active</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill59 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.80}`}</p>
    </div>
  );
}

function SwatchRow33() {
  return (
    <div className="bg-[#37640c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame59 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            success.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow32 />
      <SwatchRow33 />
    </div>
  );
}

function TokenPill60() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">success.surface.default</p>
    </div>
  );
}

function TokenPill61() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill60 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.10}`}</p>
    </div>
  );
}

function ColorTestCard12() {
  return (
    <div className="bg-[#d9fbb8] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text27 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(140, 230, 59, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #8CE63B)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons13 />
        <Frame60 />
        <TokenPill61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ce63b] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame61 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#37640c] text-[28px] text-nowrap whitespace-pre">on.surface.success.head</p>
      <Text28 />
    </div>
  );
}

function Button101() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Default</p>
    </div>
  );
}

function Button102() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37640c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button103() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37640c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline10() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button104() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#37640c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline10 />
    </div>
  );
}

function Button105() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button101 />
      <Button102 />
      <Button103 />
      <Button104 />
      <Button105 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button106() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <Icon41 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button107() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
      <Icon42 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button108() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#61aa1c] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(16,22,6,0.3)]" />
      <Icon43 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button106 />
      <Button107 />
      <Button108 />
    </div>
  );
}

function Buttons14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row30 />
      <Row31 />
    </div>
  );
}

function TokenPill62() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">success.fill.default</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill62 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.60}`}</p>
    </div>
  );
}

function SwatchRow34() {
  return (
    <div className="bg-[#61aa1c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame62 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            success.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill63() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">success.fill.active</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill63 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{positive.80}`}</p>
    </div>
  );
}

function SwatchRow35() {
  return (
    <div className="bg-[#37640c] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame63 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            success.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow34 />
      <SwatchRow35 />
    </div>
  );
}

function TokenPill64() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill65() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill64 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard13() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text29 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons14 />
        <Frame64 />
        <TokenPill65 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard12 />
      <ColorTestCard13 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame65 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#164270] text-[28px] text-nowrap whitespace-pre">info.on.surface.default</p>
      <Text30 />
    </div>
  );
}

function Button109() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Default</p>
    </div>
  );
}

function Button110() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#164270] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button111() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#164270] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline11() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button112() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#164270] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline11 />
    </div>
  );
}

function Button113() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row32() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button109 />
      <Button110 />
      <Button111 />
      <Button112 />
      <Button113 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button114() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <Icon44 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button115() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
      <Icon45 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button116() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <Icon46 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
    </div>
  );
}

function Row33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button114 />
      <Button115 />
      <Button116 />
    </div>
  );
}

function Buttons15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row32 />
      <Row33 />
    </div>
  );
}

function TokenPill66() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">info.fill.default</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill66 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{informative.70}`}</p>
    </div>
  );
}

function SwatchRow36() {
  return (
    <div className="bg-[#317ccc] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame66 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            info.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill67() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">info.fill.active</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill67 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{informative.90}`}</p>
    </div>
  );
}

function SwatchRow37() {
  return (
    <div className="bg-[#164270] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame67 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            info.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow36 />
      <SwatchRow37 />
    </div>
  );
}

function TokenPill68() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">info.surface.default</p>
    </div>
  );
}

function TokenPill69() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill68 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{informative.10}`}</p>
    </div>
  );
}

function ColorTestCard14() {
  return (
    <div className="bg-[#edf1fa] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text31 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(190, 210, 247, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #BED2F7)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons15 />
        <Frame68 />
        <TokenPill69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bed2f7] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame69 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#296cb2] text-[28px] text-nowrap whitespace-pre">on.surface.info.head</p>
      <Text32 />
    </div>
  );
}

function Button117() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Default</p>
    </div>
  );
}

function Button118() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#164270] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button119() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#164270] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline12() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button120() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#164270] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline12 />
    </div>
  );
}

function Button121() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row34() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button117 />
      <Button118 />
      <Button119 />
      <Button120 />
      <Button121 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button122() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <Icon47 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button123() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
      <Icon48 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button124() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#317ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(9,21,38,0.3)]" />
      <Icon49 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
    </div>
  );
}

function Row35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button122 />
      <Button123 />
      <Button124 />
    </div>
  );
}

function Buttons16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row34 />
      <Row35 />
    </div>
  );
}

function TokenPill70() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">info.fill.default</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill70 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{informative.70}`}</p>
    </div>
  );
}

function SwatchRow38() {
  return (
    <div className="bg-[#317ccc] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame70 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            info.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill71() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">info.fill.active</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill71 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{informative.90}`}</p>
    </div>
  );
}

function SwatchRow39() {
  return (
    <div className="bg-[#164270] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame71 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            info.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow38 />
      <SwatchRow39 />
    </div>
  );
}

function TokenPill72() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill73() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill72 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard15() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text33 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons16 />
        <Frame72 />
        <TokenPill73 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard14 />
      <ColorTestCard15 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame73 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#2e1e09] text-[28px] text-nowrap whitespace-pre">warning.on.surface.default</p>
      <Text34 />
    </div>
  );
}

function Button125() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1307] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button126() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cd8422] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button127() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cd8422] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline13() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button128() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cd8422] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline13 />
    </div>
  );
}

function Button129() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row36() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button125 />
      <Button126 />
      <Button127 />
      <Button128 />
      <Button129 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1B1307)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1B1307)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button130() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <Icon50 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1B1307)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1B1307)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button131() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1307] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon51 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1B1307)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1B1307)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button132() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <Icon52 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1307] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button130 />
      <Button131 />
      <Button132 />
    </div>
  );
}

function Buttons17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row36 />
      <Row37 />
    </div>
  );
}

function TokenPill74() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">warning.fill.default</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill74 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1b1307] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{notice.50}`}</p>
    </div>
  );
}

function SwatchRow40() {
  return (
    <div className="bg-[#f9a332] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame74 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1b1307] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            warning.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill75() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">warning.fill.active</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill75 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1b1307] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{notice.60}`}</p>
    </div>
  );
}

function SwatchRow41() {
  return (
    <div className="bg-[#cd8422] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame75 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1b1307] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            warning.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow40 />
      <SwatchRow41 />
    </div>
  );
}

function TokenPill76() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">warning.surface.default</p>
    </div>
  );
}

function TokenPill77() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill76 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{notice.10}`}</p>
    </div>
  );
}

function ColorTestCard16() {
  return (
    <div className="bg-[#fbeee3] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text35 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(249, 221, 194, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #F9DDC2)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons17 />
        <Frame76 />
        <TokenPill77 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9ddc2] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame77 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#a66a19] text-[28px] text-nowrap whitespace-pre">on.surface.warning.head</p>
      <Text36 />
    </div>
  );
}

function Button133() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1307] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button134() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cd8422] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button135() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cd8422] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline14() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button136() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cd8422] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline14 />
    </div>
  );
}

function Button137() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row38() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button133 />
      <Button134 />
      <Button135 />
      <Button136 />
      <Button137 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1B1307)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1B1307)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button138() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <Icon53 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1B1307)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1B1307)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button139() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1307] text-[15px] text-nowrap whitespace-pre">button</p>
      <Icon54 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #1B1307)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #1B1307)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button140() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a332] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(27,19,7,0.3)]" />
      <Icon55 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1307] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button138 />
      <Button139 />
      <Button140 />
    </div>
  );
}

function Buttons18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row38 />
      <Row39 />
    </div>
  );
}

function TokenPill78() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">warning.fill.default</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill78 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1b1307] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{notice.50}`}</p>
    </div>
  );
}

function SwatchRow42() {
  return (
    <div className="bg-[#f9a332] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame78 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1b1307] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            warning.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill79() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">warning.fill.active</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill79 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#1b1307] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{notice.60}`}</p>
    </div>
  );
}

function SwatchRow43() {
  return (
    <div className="bg-[#cd8422] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame79 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#1b1307] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            warning.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow42 />
      <SwatchRow43 />
    </div>
  );
}

function TokenPill80() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill81() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill80 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard17() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text37 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons18 />
        <Frame80 />
        <TokenPill81 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard16 />
      <ColorTestCard17 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame81 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#571106] text-[28px] text-nowrap whitespace-pre">error.on.surface.default</p>
      <Text38 />
    </div>
  );
}

function Button141() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Default</p>
    </div>
  );
}

function Button142() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#800c09] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button143() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#800c09] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline15() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button144() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#800c09] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline15 />
    </div>
  );
}

function Button145() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row40() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button141 />
      <Button142 />
      <Button143 />
      <Button144 />
      <Button145 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button146() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <Icon56 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button147() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
      <Icon57 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button148() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <Icon58 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
    </div>
  );
}

function Row41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button146 />
      <Button147 />
      <Button148 />
    </div>
  );
}

function Buttons19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row40 />
      <Row41 />
    </div>
  );
}

function TokenPill82() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">error.fill.default</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill82 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{negative.70}`}</p>
    </div>
  );
}

function SwatchRow44() {
  return (
    <div className="bg-[#dc1d19] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame82 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            error.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill83() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">error.fill.active</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill83 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{negative.90}`}</p>
    </div>
  );
}

function SwatchRow45() {
  return (
    <div className="bg-[#800c09] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame83 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            error.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow44 />
      <SwatchRow45 />
    </div>
  );
}

function TokenPill84() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">error.surface.default</p>
    </div>
  );
}

function TokenPill85() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill84 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{negative.10}`}</p>
    </div>
  );
}

function ColorTestCard18() {
  return (
    <div className="bg-[#fbeeea] relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text39 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(250, 195, 181, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #FAC3B5)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons19 />
        <Frame84 />
        <TokenPill85 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#fac3b5] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.4] relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] not-italic relative shrink-0 text-[#212123] text-[23px] text-center text-nowrap whitespace-pre">on.surface.head</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2c2c2d] text-[19px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.body
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#2c2c2d] text-[19px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique. Nulla aliquet enim tortor at auctor.
      </p>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="text">
      <Frame85 />
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#59595c] text-[15px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        on.surface.label
      </p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af1511] text-[28px] text-nowrap whitespace-pre">on.surface.error.head</p>
      <Text40 />
    </div>
  );
}

function Button149() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Default</p>
    </div>
  );
}

function Button150() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#800c09] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Hover</p>
    </div>
  );
}

function Button151() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#800c09] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Active</p>
    </div>
  );
}

function Outline16() {
  return (
    <div className="absolute inset-[-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button152() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#800c09] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white whitespace-pre">Focus</p>
      <Outline16 />
    </div>
  );
}

function Button153() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row42() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button149 />
      <Button150 />
      <Button151 />
      <Button152 />
      <Button153 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button154() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <Icon59 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button155() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
      <Icon60 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <g id="Vector Icon">
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button156() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc1d19] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_10px_4px_rgba(35,15,6,0.3)]" />
      <Icon61 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">button</p>
    </div>
  );
}

function Row43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button154 />
      <Button155 />
      <Button156 />
    </div>
  );
}

function Buttons20() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="buttons">
      <Row42 />
      <Row43 />
    </div>
  );
}

function TokenPill86() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">error.fill.default</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill86 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{negative.70}`}</p>
    </div>
  );
}

function SwatchRow46() {
  return (
    <div className="bg-[#dc1d19] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame86 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            error.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function TokenPill87() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">error.fill.active</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill87 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{negative.90}`}</p>
    </div>
  );
}

function SwatchRow47() {
  return (
    <div className="bg-[#800c09] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame87 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[19px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            error.on.fill.default
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SwatchRow46 />
      <SwatchRow47 />
    </div>
  );
}

function TokenPill88() {
  return (
    <div className="bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">surface.default</p>
    </div>
  );
}

function TokenPill89() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill88 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{white.100}`}</p>
    </div>
  );
}

function ColorTestCard19() {
  return (
    <div className="bg-white relative shrink-0 w-[725px]" data-name="Color Test Card">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[72px] px-[24px] relative rounded-[inherit] w-[725px]">
        <Text41 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(208, 208, 209, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
              <line id="Line 1" stroke="var(--stroke-0, #D0D0D1)" x2="677" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Buttons20 />
        <Frame88 />
        <TokenPill89 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <ColorTestCard18 />
      <ColorTestCard19 />
    </div>
  );
}

function Row44() {
  return (
    <div className="content-stretch flex gap-[84px] items-start relative shrink-0" data-name="Row">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-start relative shrink-0" data-name="Container">
      <Row8 />
      <Row27 />
      <Row44 />
    </div>
  );
}

function TokenPill90() {
  return (
    <div className="absolute bg-[#f3f3f1] box-border content-stretch flex gap-[10px] items-center justify-center left-[24px] px-[8px] py-[2px] rounded-[4px] top-[24px]" data-name="Token Pill">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">bg.default</p>
    </div>
  );
}

export default function ColorsScenarios() {
  return (
    <div className="bg-[#d8daea] relative size-full" data-name="colors scenarios">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[64px] pt-[80px] px-[64px] relative size-full">
          <Container11 />
          <TokenPill90 />
        </div>
      </div>
    </div>
  );
}