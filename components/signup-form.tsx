"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon, Loading03Icon, ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"
import { useAuth } from "@/hooks/use-auth"
import { TextMorph } from "torph/react"
import { useState } from "react"

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const {
        signupLoading,
        error,
        errMsg,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        auth
    } = useAuth();

    const [passVisible, setPassVisible] = useState(false);
    const passVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPassVisible((prev) => !prev);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <a
                    href="/auth/login"
                    className="flex flex-col items-center gap-2 font-medium mb-4"
                >
                    <div className="flex items-center justify-center rounded-md">
                        <svg width="166" height="22" viewBox="0 0 661 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M197.136 21.376C216.463 21.3762 226.703 33.9202 226.703 58.8799H183.312C183.824 68.3519 189.2 74.4961 197.392 74.4961C202.767 74.496 207.503 71.8079 208.655 67.4561H225.808C221.968 80.3841 211.599 87.6797 198.159 87.6797C177.167 87.6796 166.671 76.1599 166.671 53.376C166.671 33.92 177.808 21.376 197.136 21.376ZM196.623 34.5596C189.967 34.5597 184.463 39.68 183.823 48.3838H209.552C209.296 39.0399 203.151 34.5596 196.623 34.5596Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M316.886 21.376C336.213 21.3762 346.453 33.9202 346.453 58.8799H303.062C303.574 68.3519 308.95 74.4961 317.142 74.4961C322.517 74.496 327.253 71.8079 328.405 67.4561H345.558C341.718 80.3841 331.349 87.6797 317.909 87.6797C296.917 87.6796 286.421 76.1599 286.421 53.376C286.421 33.92 297.558 21.376 316.886 21.376ZM316.373 34.5596C309.717 34.5597 304.213 39.68 303.573 48.3838H329.302C329.046 39.0399 322.901 34.5596 316.373 34.5596Z" fill="currentColor" />
                            <path d="M432.963 23.04H467.779V34.8164H432.963V60.6719C432.963 68.6079 435.779 73.2158 442.563 73.2158C449.219 73.2158 452.291 68.7357 452.291 60.9277V44.5439H467.779V62.4639C467.779 75.7758 460.099 87.6796 442.308 87.6797C423.876 87.6797 416.579 75.9039 416.579 62.3359V6.01562H432.963V23.04Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M503.636 21.376C522.963 21.3762 533.203 33.9202 533.203 58.8799H489.812C490.324 68.3519 495.7 74.4961 503.892 74.4961C509.267 74.496 514.003 71.808 515.155 67.4561H532.308C528.468 80.3841 518.099 87.6797 504.659 87.6797C483.667 87.6796 473.171 76.1599 473.171 53.376C473.171 33.92 484.308 21.376 503.636 21.376ZM503.123 34.5596C496.467 34.5597 490.963 39.68 490.323 48.3838H516.052C515.796 39.0399 509.651 34.5596 503.123 34.5596Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M568.011 21.376C587.338 21.3762 597.578 33.9202 597.578 58.8799H554.187C554.699 68.3519 560.075 74.4961 568.267 74.4961C573.642 74.496 578.378 71.808 579.53 67.4561H596.683C592.843 80.3841 582.474 87.6797 569.034 87.6797C548.042 87.6796 537.546 76.1599 537.546 53.376C537.546 33.92 548.683 21.376 568.011 21.376ZM567.498 34.5596C560.842 34.5597 555.338 39.68 554.698 48.3838H580.427C580.171 39.0399 574.026 34.5596 567.498 34.5596Z" fill="currentColor" />
                            <path d="M16.6396 86.0156H0V0H16.6396V86.0156Z" fill="currentColor" />
                            <path d="M47.6396 86.0156H31V0H47.6396V86.0156Z" fill="currentColor" />
                            <path d="M138.409 15.8721H93.2256V34.0479H134.825V49.0244H93.2256V70.9121H140.457V86.0156H75.9453V1.02441H138.409V15.8721Z" fill="currentColor" />
                            <path d="M161.095 86.0156H144.454V0H161.095V86.0156Z" fill="currentColor" />
                            <path d="M256.879 64.6396L270.191 23.04H287.728L265.071 86.0156H247.663L225.136 23.04H243.695L256.879 64.6396Z" fill="currentColor" />
                            <path d="M388.429 21.376C400.461 21.3761 409.292 28.6723 409.292 42.3682V86.0156H392.524V47.8721C392.524 38.1441 389.708 35.4561 381.772 35.4561C373.068 35.4561 368.845 40.32 368.845 49.9199V86.0156H352.204V23.04H368.076V32.2559C371.916 25.2159 378.317 21.376 388.429 21.376Z" fill="currentColor" />
                            <path d="M639.554 21.376C651.586 21.3761 660.417 28.6723 660.417 42.3682V86.0156H643.649V47.8721C643.649 38.1441 640.833 35.4561 632.897 35.4561C624.193 35.4561 619.97 40.32 619.97 49.9199V86.0156H603.329V23.04H619.201V32.2559C623.041 25.2159 629.442 21.376 639.554 21.376Z" fill="currentColor" />
                        </svg>
                    </div>
                </a>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="h-12 rounded-xl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={signupLoading}
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="name">Full name</FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Mohammed Ali"
                        required
                        className="h-12 rounded-xl"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={signupLoading}
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <InputGroup className="h-12 rounded-xl">
                        <InputGroupInput
                            id="password"
                            type={passVisible ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={signupLoading}
                        />
                        <InputGroupAddon align="inline-end">
                            <Button onClick={passVisibility} variant={'ghost'}>
                                <HugeiconsIcon icon={passVisible ? ViewOffSlashIcon : ViewIcon} strokeWidth={2} data-icon="inline-start" />
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {error && (
                        <FieldDescription className="text-destructive flex flex-row items-center gap-x-2">
                            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} size={16} />
                            {errMsg}
                        </FieldDescription>
                    )}
                </Field>
                <Field>
                    <Button
                        className="h-12 rounded-xl"
                        onClick={auth.signup}
                        disabled={!email || !password || !name || signupLoading}
                    >
                        {signupLoading && (
                            <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="animate-spin" />
                        )}
                        <TextMorph>
                            {signupLoading ? 'Processing Signup' : 'Create account'}
                        </TextMorph>
                    </Button>
                </Field>
                <FieldDescription>
                    Already registered? <a href="/auth/login">Sign in</a>
                </FieldDescription>
            </FieldGroup>
            <FieldDescription className="py-6 text-center w-full bg-accent dark:bg-sidebar absolute bottom-0 left-0 right-0">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
