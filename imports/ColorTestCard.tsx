import svgPaths from "./svg-bjjyupeugo";

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
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110c79] text-[28px] text-nowrap whitespace-pre">primary.on.surface.default</p>
      <Text />
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Hover</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function Outline() {
  return (
    <div className="absolute inset-[-2px_-17px_-14px_-2px] rounded-[10px]" data-name="outline">
      <div aria-hidden="true" className="absolute border border-[#59595c] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#110c79] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-center text-nowrap whitespace-pre">Focus</p>
      <Outline />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#d0d0d1] box-border content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d0d0d1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#98989a] text-[15px] text-nowrap whitespace-pre">Disabled</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="row">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
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

function Button5() {
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
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[16px] pr-[13.333px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">button</p>
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
            <path d={svgPaths.p25e148b6} fill="var(--fill-0, #F3EFFC)" />
            <path d={svgPaths.p20205500} fill="var(--fill-0, #F3EFFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center pl-[13.333px] pr-[16px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0716e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_3px_rgba(15,7,78,0.3)]" />
      <Icon2 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3effc] text-[15px] text-nowrap whitespace-pre">button</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="row">
      <Button5 />
      <Button6 />
      <Button7 />
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
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.default</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.90}`}</p>
    </div>
  );
}

function SwatchRow() {
  return (
    <div className="bg-[#0716e0] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame2 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
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
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.active</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill1 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.110}`}</p>
    </div>
  );
}

function SwatchRow1() {
  return (
    <div className="bg-[#110c79] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame3 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
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
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.fill.disabled</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <TokenPill2 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f3effc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.30} / mix({grey.60} , 0.5) / srgb`}</p>
    </div>
  );
}

function SwatchRow2() {
  return (
    <div className="bg-[#c0bbca] relative shrink-0 w-full" data-name="Swatch row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[12px] relative w-full">
          <Frame4 />
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f3effc] text-[19px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            primary.on.fill.default
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
      <p className="font-['Courier:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2c2c2d] text-[16px] text-nowrap whitespace-pre">primary.surface.default</p>
    </div>
  );
}

function TokenPill4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[24px]" data-name="token pill">
      <TokenPill3 />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#2c2c2d] text-[12px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>{`{primary.10}`}</p>
    </div>
  );
}

export default function ColorTestCard() {
  return (
    <div className="bg-[#f3effc] relative size-full" data-name="Color Test Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[72px] px-[24px] relative size-full">
          <Text1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(232, 222, 251, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
                <line id="Line 1" stroke="var(--stroke-0, #E8DEFB)" x2="677" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Buttons />
          <Frame />
          <TokenPill4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8defb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}